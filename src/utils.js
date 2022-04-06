/**
 * @param {string} classes 
 * @param {string} staticClasses 
 * @returns {string}
 */
export const addClass = (classes, staticClasses) => `${classes ? classes : ''} ${staticClasses}`.trim();

/**
 * @param {string} param
 * @returns {string} - capitalize string
 */
export const capitalize = ([first, ...remain]) => `${first.toUpperCase()}${remain.join('')}`

export const setToLocalStorage = (key) => (
  (data) => {
    localStorage.setItem(
      key,
      JSON.stringify(
        data,
        (key, value) => key.startsWith('_') ? undefined : value
      )
    )
  }
)

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data)
  }

  return null;
}
