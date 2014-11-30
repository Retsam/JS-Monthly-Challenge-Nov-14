class SearchView {
    searchText : KnockoutObservable<string>
    constructor(searchController : SearchController) {
        var self = this;
        self.searchText = ko.observable("");

        function doSearch() {
            searchController.search({
                text: self.searchText()
            })
        };

        self.searchText.subscribe(_.debounce(function () {
            doSearch();
            refreshEveryMinute(); //Restart the 60 second timeout
        }, 1000));

        var refreshEveryMinute = _.debounce(function () {
            doSearch();
            refreshEveryMinute(); //Restart the 60 second timeout
        }, 60000);
    }
}

ko.components.register('search-view', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: {
        element: "searchView"
    }
});