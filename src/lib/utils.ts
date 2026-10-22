/**
 * Join class names, dropping anything falsy.
 *
 * Lets a component write cn("base", isActive && "active") without ending up
 * with the string "false" in the class attribute.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
