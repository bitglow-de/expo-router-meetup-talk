export const deriveTimestamp = (isoDateTime: string) => {
  const minMs = 60 * 1000;
  const hourMs = 60 * minMs;
  const dayMs = 24 * hourMs;

  const now = new Date().getTime();
  const then = new Date(isoDateTime).getTime();

  const hours = Math.round((now - then) / hourMs);

  if (hours < 1) {
    const mins = Math.round((now - then) / minMs);
    return `${mins}m`;
  }
  if (hours < 12) return `${hours}h`;

  const days = Math.round((now - then) / dayMs);
  return `${days}d`;
};
