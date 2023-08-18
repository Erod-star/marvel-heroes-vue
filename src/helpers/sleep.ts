export const sleep = async () => {
  await new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}
