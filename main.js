let button = document.querySelector('#button')
let body = document.querySelector('body')

let parent = document.createElement('div')
parent.className = 'parent'
let child = document.createElement('div')
child.className = 'child'

parent.appendChild(child)
body.appendChild(parent)






let hacker = async() =>{
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    let data = await response.json()
    for (let i = 0; i < 100; i++) {
        
     fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
     .then(res=>{
        return res.json()
     })
     .then(newdata=>{
        console.log(newdata)
        
        let newChild = document.createElement('div')
        let newChildTwo = document.createElement('div')
        let linkChild = document.createElement('a')
        newChild.className = 'class'

        body.appendChild(newChild)
        linkChild.href = newdata.url
        linkChild.innerHTML = `${newdata.title}`
        linkChild.setAttribute('target', '_blank')
        newChild.appendChild(linkChild)


        newChildTwo.innerHTML = `\nAuthor- ${newdata.by}`
        newChildTwo.className = 'comment'
        newChildTwo.innerHTML = `\nScore-${newdata.score}`
        newChildTwo.innerHTML = `\nComment-${newdata.descendants}`
        body.appendChild(newChildTwo)

     })
    
}


}

hacker()