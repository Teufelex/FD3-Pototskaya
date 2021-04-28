const IsShopItem = React.createClass({

    displayName: "isShopItem",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
        isActive: React.PropTypes.bool.isRequired,
        cbDeleted: React.PropTypes.func.isRequired,
        cbClicked: React.PropTypes.func.isRequired,
    },

    elementClicked: function() {
       this.props.cbClicked(this.props.code);
    },

    elementDelete: function() {
        if (confirm("Вы уверены что хотите удалить этот товар?"))
            this.props.cbDeleted(this.props.code);
    },

    render: function() {
        return React.DOM.div({className: (this.props.isActive) ? 
            "section__item section__item--active" : "section__item", 
            onClick: this.elementClicked},
                React.DOM.img({src: this.props.url, alt: "parfum", className: "item__photo"}),
                React.DOM.span({className: "item__name"}, this.props.name),
                React.DOM.span({className: "item__count"}, "Осталось " + this.props.count + " ед."),
                React.DOM.span({className: "item__price"}, this.props.price + "p."),
                React.DOM.button({className: "item__btn", onClick: this.elementDelete}, "Delete"),
        );
    }
});