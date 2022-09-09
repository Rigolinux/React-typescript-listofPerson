export const setlocalStorage = (key: string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value));

}
export const getlocalStorage = (key: string) => {
   return localStorage.getItem(key);
}