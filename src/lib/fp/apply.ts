// SPDX-License-Identifier: AGPL-3.0

export function apply_svelte<T, R>(
    f: (args: T) => R, arg: CustomEvent<T>
): R {
    return f(arg.detail)
}
