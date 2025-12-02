/**
 * Format a number with consistent locale to avoid hydration mismatches
 */
export function formatNumber(value: number): string {
  return value.toLocaleString('fr-FR')
}

/**
 * Format a currency value
 */
export function formatCurrency(value: number): string {
  return `€${value.toLocaleString('fr-FR')}`
}

