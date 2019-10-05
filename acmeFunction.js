    //------------- Array Position being pulled on click
    const slots = ['first', 'second', 'third']

    //------------- Data being pulled to individual box
    let users = [
        {id: 1, name: 'Moe', slot: 'first'},
        {id: 2, name: 'Larry', slot: 'second'},
        {id: 3, name: 'Curly', slot: 'third'},
        {id: 4, name: 'Lucy', slot: 'third', selected: true}
    ]
    //------------- Query Selector begins
    const listContainer = document.querySelector('#list')
    let firstDiv = document.querySelector('.first')
    let secondDiv = document.querySelector('.second')
    let thirdDiv = document.querySelector('.third')
    //------------- Query Selector ends
    //------------- Add Event Listener function added on each event click
    listContainer.addEventListener('click', ev => {
        ev.stopPropagation()
        //------------- switch boxes from first forward button
        if (ev.target.classList.value === 'fwd' && ev.target.id === `${slots[0]}`){
            if (users[0].selected === true && users[0].slot === slots[0]){
                users[0].slot = slots[1]
            }
            if (users[1].selected === true && users[1].slot === slots[0]){
                users[1].slot = slots[1]
            }
            if (users[2].selected === true && users[2].slot === slots[0]){
                users[2].slot = slots[1]
            }
            if (users[3].selected === true && users[3].slot === slots[0]){
                users[3].slot = slots[1]
            }
        }//------------- if boxes ends
        //------------- switch boxes from second forward button
        if (ev.target.classList.value === 'fwd' && ev.target.id === `${slots[1]}`){
            if (users[0].selected === true && users[0].slot === slots[1]){
                users[0].slot = slots[2]
            }
            if (users[1].selected === true && users[1].slot === slots[1]){
                users[1].slot = slots[2]
            }
            if (users[2].selected === true && users[2].slot === slots[1]){
                users[2].slot = slots[2]
            }
            if (users[3].selected === true && users[3].slot === slots[1]){
                users[3].slot = slots[2]
            }
        }//------------- if boxes ends
        //------------- switch boxes from second backward button
        if (ev.target.classList.value === 'back' && ev.target.id === `${slots[1]}`){
            if (users[0].selected === true && users[0].slot === slots[1]){
                users[0].slot = slots[0]
            }
            if (users[1].selected === true && users[1].slot === slots[1]){
                users[1].slot = slots[0]
            }
            if (users[2].selected === true && users[2].slot === slots[1]){
                users[2].slot = slots[0]
            }
            if (users[3].selected === true && users[3].slot === slots[1]){
                users[3].slot = slots[0]
            }
        }//------------- if boxes ends
        //------------- switch boxes from third backward button
        if (ev.target.classList.value === 'back' && ev.target.id === `${slots[2]}`){
            if (users[0].selected === true && users[0].slot === slots[2]){
                users[0].slot = slots[1]
            }
            if (users[1].selected === true && users[1].slot === slots[2]){
                users[1].slot = slots[1]
            }
            if (users[2].selected === true && users[2].slot === slots[2]){
                users[2].slot = slots[1]
            }
            if (users[3].selected === true && users[3].slot === slots[2]){
                users[3].slot = slots[1]
            }
        }//------------- if boxes ends
    })
    //------------- Second Add Event Listener function added on each event click
    listContainer.addEventListener('click', ev => {
        //------------ Erases all boxes from previous list call
        firstDiv.innerHTML = ''
        secondDiv.innerHTML = ''
        thirdDiv.innerHTML = ''
        //------------ selects Moe if statement
        if (ev.target.id === `${users[0].id}`){
            if (ev.target.id === `${users[0].id}` && ev.target.innerHTML === users[0].name && users[0].selected === undefined || users[0].selected === false){
                users[0].selected = true
            }
            else if (ev.target.id === `${users[0].id}` && ev.target.innerHTML === users[0].name && users[0].selected === true ){
                users[0].selected = false
            }
        }
        //------------ selects Larry if statement
        if (ev.target.id === `${users[1].id}`){
            if (ev.target.innerHTML === users[1].name && users[1].selected === undefined || users[1].selected === false){
                users[1].selected = true
            }
            else if (ev.target.id === `${users[1].id}` && ev.target.innerHTML === users[1].name && users[1].selected === true ){
                users[1].selected = false
            }
        }
        //------------ selects Curly if statement
        if (ev.target.id === `${users[2].id}`){
            if (ev.target.innerHTML === users[2].name && users[2].selected === undefined || users[2].selected === false){
                users[2].selected = true
            }
            else if (ev.target.innerHTML === users[2].name && users[2].selected === true ){
                users[2].selected = false
            }
        }
        //------------ selects Lucy if statement
        if (ev.target.id === `${users[3].id}`){
            if (ev.target.innerHTML === users[3].name && users[3].selected === undefined || users[3].selected === false){
                users[3].selected = true
            }
            else if (ev.target.id === `${users[3].id}` && ev.target.innerHTML === users[3].name && users[3].selected === true ){
                users[3].selected = false
            }
        }
        list()//------------- Erases data from previous list call
        })


    let list = () => {
        //------------- Button for first fwd and back button
        let forwardOne = document.createElement('BUTTON')
        let backOne = document.createElement('BUTTON')
        //------------- Button for second fwd and back button
        let forwardTwo = document.createElement('BUTTON')
        let backTwo = document.createElement('BUTTON')
        //------------- Button for third fwd and back button
        let forwardThree = document.createElement('BUTTON')
        let backThree = document.createElement('BUTTON')
        //------------- H1 header for each div box
        let firstText = document.createElement('h1')
        let secondText = document.createElement('h1')
        let thirdText = document.createElement('h1')
        //------------- adding class and id to first fwd and back button
        forwardOne.classList.add('fwd')
        forwardOne.id = slots[0]
        backOne.classList.add('back')
        backOne.id = slots[0]
         //------------- adding class and id to second fwd and back button
        forwardTwo.classList.add('fwd')
        forwardTwo.id = slots[1]
        backTwo.classList.add('back')
        backTwo.id = slots[1]
         //------------- adding class and id to third fwd and back button
        forwardThree.classList.add('fwd')
        forwardThree.id = slots[2]
        backThree.classList.add('back')
        backThree.id = slots[2]
        //------------- innerHTML in first fwd and back button
        backOne.append('<')
        forwardOne.append('>')
        //------------- innerHTML in second fwd and back button
        backTwo.append('<')
        forwardTwo.append('>')
        //------------- innerHTML in third fwd and back button
        backThree.append('<')
        forwardThree.append('>')
        //------------- add fwd and back button to first div
        firstDiv.append(forwardOne)
        firstDiv.append(backOne)
        //------------- add 'First' first div
        firstText.append('FIRST')
        firstDiv.append(firstText)
        //------------- add fwd and back button to second div
        secondDiv.append(forwardTwo)
        secondDiv.append(backTwo)
        //------------- add 'Second' second div
        secondText.append('SECOND')
        secondDiv.append(secondText)
        //------------- add fwd and back button to third div
        thirdDiv.append(forwardThree)
        thirdDiv.append(backThree)
        //------------- add 'Third' second div
        thirdText.append('THIRD')
        thirdDiv.append(thirdText)
        //------------- add 'Third' second div
        //------------- For Each obj in Array add certain function
        users.forEach((user) => {
            let buttonDiv = document.createElement('BUTTON')
            //------------- Button created to store name information
            //------------- if user.selected is true add class 'active'
            if (user.selected){
                buttonDiv.classList.add('active')
            }
            //------------- if user.slot is First add button to first div
            if (user.slot === slots[0]){
                buttonDiv.id = user.id
                buttonDiv.classList.add('firstItem')
                buttonDiv.append(user.name)
                firstDiv.append(buttonDiv)
            }
            //------------- if user.slot is Second add button to second div
            else if (user.slot === slots[1]){
                buttonDiv.id = user.id
                buttonDiv.classList.add('secondItem')
                buttonDiv.append(user.name)
                secondDiv.append(buttonDiv)
            }
            //------------- if user.slot is Third add button to third div
            else {
                buttonDiv.id = user.id
                buttonDiv.classList.add('thirdItem')
                buttonDiv.append(user.name)
                thirdDiv.append(buttonDiv)
            }
        })
        }
        list()//------------- call list and show data information into html
