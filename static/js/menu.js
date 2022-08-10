const menuContainer = document.getElementById('menu-container')


const menuItems = [
    {
        section: 'Jus',
        items: [
            { name: 'Jus de Pomme', price: 9.00 },
            { name: 'Jus de Pêche', price: 9.00 },
            { name: 'Jus Citron', price: 10.00 },
            { name: 'Jus de Frais', price: 10.00 },
            { name: 'Jus de Banane', price: 10.00 },
            { name: 'Jus d\'Orange', price: 10.00 },
            { name: 'Panaché', price: 10.00 },
            { name: 'Panaché', price: 10.00 },
            { name: 'Jus d\'Avocat', price: 12.00 },
            { name: 'Jus de Mangue', price: 13.00 },
            { name: 'Jus d\'Ananas', price: 13.00 },
            { name: 'Jus de Citron Gimgembre', price: 13.00 },
            { name: 'Jus d\'Avocat fruits sec', price: 13.00 },
            { name: 'Za3za3', price: 20.00 },
        ]
    },
    {
        section: 'Crêpe et Gauffres',
        items: [
            { name: 'Crêpe au Miel', price: 12.00 },
            { name: 'Crêpe a la confiture', price: 12.00 },
            { name: 'Crêpe Amlou', price: 15.00 },
            { name: 'Crêpe Nutella fruits', price: 20.00 },
            { name: 'Gauffres au Miel', price: 12.00 },
            { name: 'Gauffres a la confiture', price: 12.00 },
            { name: 'Gauffres Amlou', price: 15.00 },
            { name: 'Gauffres Nutella fruits', price: 20.00 },
        ]
    },
    {
        section: 'Smoothie',
        items: [
            { name: 'Smoothie Banane', price: 12.00 },
            { name: 'Smoothie Fraise', price: 12.00 },
            { name: 'Smoothie Mangue', price: 15.00 },
            { name: 'Smoothie Ananas', price: 15.00 },
        ]
    },
    {
        section: 'Milk Shake',
        items: [
            { name: 'Milk shake vanille', price: 13.00 },
            { name: 'Milk shake chocolat', price: 15.00 },
            { name: 'Milk shake caramel', price: 15.00 },
        ]
    },
    {
        section: 'Cocktails',
        items: [
            { name: 'Mojito classique', price: 13.00 },
            { name: 'Mojito Mangue', price: 15.00 },
            { name: 'Mojito Ananas', price: 15.00 },
            { name: 'Pina Colada', price: 20.00 },
        ]
    },
]

window.addEventListener('DOMContentLoaded', () => {
    menuItems.forEach(group => {
        const groupDiv = document.createElement('div')
        const groupTitle = document.createElement('h3')
        const groupItemsDiv = document.createElement('div')

        groupTitle.textContent = group.section

        group.items.forEach(item => {
            const itemDiv = document.createElement('div')
            const itemName = document.createElement('span')
            const itemPrice = document.createElement('span')
            
            itemName.textContent = item.name
            itemPrice.textContent = item.price.toFixed(2)

            itemDiv.classList.add('item')

            itemDiv.appendChild(itemName)
            itemDiv.appendChild(itemPrice)
            groupItemsDiv.appendChild(itemDiv)
        })

        groupDiv.classList.add('menu-group')
        groupItemsDiv.classList.add('items')

        groupDiv.append(groupTitle)
        groupDiv.append(groupItemsDiv)
        menuContainer.appendChild(groupDiv)
    })
})