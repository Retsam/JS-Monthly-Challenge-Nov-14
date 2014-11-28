var vm = (function (ko, SearchView, ResultsView, searchController) {
    var vm = {
        searchView: new SearchView(searchController),
        resultsView: new ResultsView(searchController)
    };
    ko.applyBindings(vm);
    return vm;
}(ko, SearchView, ResultsView, searchController));
