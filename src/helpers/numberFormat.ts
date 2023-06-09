/**
 * Format number pattern pt-BR
 * @param value
 * @param maximumFractionDigits
 * @returns {string}
 */
function numberFormat(
  value: string | number | null | undefined,
  maximumFractionDigits = 2
): string {
  if (typeof value === "string" && value !== "") value = parseFloat(value);

  value = !value ? 0 : value;

  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: maximumFractionDigits,
    minimumFractionDigits: maximumFractionDigits,
  });
}

/**
 * Format currency pattern pt-BR
 * @param value
 * @param maximumFractionDigits
 * @returns {string}
 */
function moneyFormat(
  value: string | number | null | undefined,
  maximumFractionDigits = 2
): string {
  if (typeof value === "string" && value !== "") value = parseFloat(value);

  value = !value ? 0 : value;

  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: maximumFractionDigits,
    minimumFractionDigits: maximumFractionDigits,
  });
}

/**
 * Format percent number pattern pt-BR
 * @param value
 * @param maximumFractionDigits
 * @returns {string}
 */
function percentFormat(
  value: string | number | null,
  maximumFractionDigits = 2
): string {
  if (typeof value === "string") value = parseFloat(value);

  value = !value ? 0 : value;

  return (
    value.toLocaleString("pt-BR", {
      maximumFractionDigits: maximumFractionDigits,
      minimumFractionDigits: maximumFractionDigits,
    }) + "%"
  );
}

export { moneyFormat, numberFormat, percentFormat };
