IsShopItem = React.createClass({
    displayName: "isShopItem",

    getInitialState: function() {
        return {
            activeElem: null,
            itemList: this.props.items,
            deletedElements: [],
        }
    },

    elementClicked: function(e) {
        if (this.state.activeElem !== null && this.state.activeElem !== e.currentTarget) 
            this.state.activeElem.classList.remove("section__item--active");
        e.currentTarget.classList.toggle("section__item--active");
        this.setState({activeElem: e.currentTarget});
    },

    elementDelete: function(e) {
        let isAgree = confirm("Вы уверены, что хотите удалить?");
        if (isAgree) {
            let elemKey = e.target.parentNode.getAttribute("data-key");
            let newDeleted = JSON.parse(JSON.stringify(this.state.deletedElements));
            newDeleted.push(+elemKey);
            this.setState({deletedElements: newDeleted});
        }
    },

    render: function() {
        const ITEMS = [];
        this.props.items.forEach(b => {
            let itemCode = 
            React.DOM.div({key: b.code, className: "section__item", "data-key": b.code, 
                    onClick: this.elementClicked},
                React.DOM.img({src: b.url, alt: "parfum", className: "item__photo"}),
                React.DOM.span({className: "item__name"}, b.name),
                React.DOM.span({className: "item__count"}, "Осталось " + b.count + " ед."),
                React.DOM.span({className: "item__price"}, b.price + "p."),
                React.DOM.button({className: "item__btn", onClick: this.elementDelete}, "Delete"),
            );

            if (this.state.deletedElements.indexOf(b.code) === -1) 
                ITEMS.push(itemCode);
        });

        return React.DOM.div({className: "section__items"}, ITEMS);
    }
})