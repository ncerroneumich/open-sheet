const func = async () => {
    const characters = await window.api.get_characters()
    const element = document.getElementById('info')
    element.innerText = characters.map((c) => {
        return JSON.stringify(c)
    }) 
}
  
func()