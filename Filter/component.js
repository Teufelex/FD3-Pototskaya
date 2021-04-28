const VOCABLIST = React.createClass({
    
    displayName: "wocabList",

    propTypes: {
       words: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },

    getInitialState: function() {
        return {
            vocabulary: this.props.words,
            activeVocabulary: this.props.words,
            autoSorted: false,
            inputValue: "",
        };
    },

    buildList: function() {
        let searchStr = new RegExp(this.state.inputValue, "ig");
        let filteredList = this.state.vocabulary.slice().filter(b => b.search(searchStr) >= 0);
        this.setState({activeVocabulary: (this.state.autoSorted) ? filteredList.sort() : filteredList});
    },

    searchFieldHasChanged: function(e) {
        this.setState ({inputValue: e.target.value}, this.buildList);
    },

    sortChecked: function(e) {
        this.setState ({autoSorted: e.target.checked}, this.buildList);
    },

    reset: function() {
        this.setState({
            activeVocabulary: this.props.words,
            autoSorted: false,
            inputValue: "",
        })
    },

    render: function() {
        const LIST = [];
        this.state.activeVocabulary.forEach(b => {
            let listItem = React.DOM.li({key: this.state.activeVocabulary.indexOf(b), className: "list__item"}, b);
            LIST.push(listItem);
        });

        return React.DOM.div({className: "wocab__block"},
            React.DOM.input({type: "checkbox", checked: this.state.autoSorted, onClick: this.sortChecked}),
            React.DOM.input({value: this.state.inputValue, onChange: this.searchFieldHasChanged}),
            React.DOM.input({type: "button", value: "Сбросить", onClick: this.reset}),
            React.DOM.ul({className: "wocab__list"}, LIST),
        );
    },
});