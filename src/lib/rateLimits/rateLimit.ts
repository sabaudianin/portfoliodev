//PODMIENIC NA REDISA kiedys

type RateLimitInfo = {
  count: number;
  firstReqTimeStamp: number;
};

const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUEST = 3;

//in memeory dla malego projektu ok
const rateLimitMap = new Map<string, RateLimitInfo>();

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (!xff) return "unknown";

  //moxe byc ip1 ip2 ... bierzemy pierwsze
  return xff.split(",")[0].trim() || "unknown";
}

export function checkRateLimit(req: Request): { limited: boolean; ip: string } {
  const ip = getClientIp(req);
  const now = Date.now();
  const info = rateLimitMap.get(ip);

  if (!info) {
    //reset licznika jak mineło okno czasowe
    rateLimitMap.set(ip, {
      count: 1,
      firstReqTimeStamp: now,
    });
    return { limited: false, ip };
  }
  const timeSinceFirst = now - info.firstReqTimeStamp;
  if (timeSinceFirst > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, {
      count: 1,
      firstReqTimeStamp: now,
    });
    return { limited: false, ip };
  }
  //jesli nadal w okonie czasowym
  if (info.count >= RATE_LIMIT_MAX_REQUEST) {
    return { limited: true, ip };
  }

  info.count += 1;
  rateLimitMap.set(ip, info);
  return { limited: false, ip };
}
