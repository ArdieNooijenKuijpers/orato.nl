const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const DEVELOPMENT_SECRET_KEY =
  "1x0000000000000000000000000000000AA";

type TurnstileResult = {
  success: boolean;
  "error-codes"?: string[];
};

export const verifyTurnstileToken = async (
  token: string,
  request: Request,
) => {
  const secret =
    process.env.NODE_ENV !== "production"
      ? DEVELOPMENT_SECRET_KEY
      : process.env.TURNSTILE_SECRET_KEY || "";

  if (!secret || !token) {
    return false;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const remoteIp =
    request.headers.get("cf-connecting-ip") ||
    forwardedFor?.split(",")[0]?.trim();

  const response = await fetch(SITEVERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      ...(remoteIp ? { remoteip: remoteIp } : {}),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileResult;

  if (!result.success) {
    console.warn("Turnstile-controle mislukt:", result["error-codes"]);
  }

  return result.success;
};
