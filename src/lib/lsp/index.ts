// SPDX-License-Identifier: AGPL-3.0

/**
 * 词法高亮
 */
export const token_provider = (async () => {
    const module = await import('./langtoken')
    return module.default
})()
