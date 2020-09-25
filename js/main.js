var defaultState = {
    protocol: document.querySelector('#protocol').value,
    cobrand: document.querySelector('#cobrand').value,
    domain: document.querySelector('#domain').value,
    path: document.querySelector('#path').value,
};

var updatePreviews = function() {
    var protocol = document.querySelector('#protocol').value || 'http://';
    var cobrand = document.querySelector('#cobrand').value || 'fixmystreet';
    var domain = document.querySelector('#domain').value || '.localhost:3000';
    var path = document.querySelector('#path').value || '/';

    document.querySelectorAll('iframe').forEach(function(el) {
        el.src = protocol + cobrand + domain + path;
    });
}

var selectNextCobrand = function() {
    var select = document.querySelector('#cobrand');
    if ( select.selectedIndex + 1 == select.length ) {
        select.selectedIndex = 0;
    } else {
        select.selectedIndex = select.selectedIndex + 1;
    }
}

var selectPreviousCobrand = function() {
    var select = document.querySelector('#cobrand');
    if ( select.selectedIndex == 0 ) {
        select.selectedIndex = select.length - 1;
    } else {
        select.selectedIndex = select.selectedIndex - 1;
    }
}

var saveState = function() {
    var state = {
        protocol: document.querySelector('#protocol').value,
        cobrand: document.querySelector('#cobrand').value,
        domain: document.querySelector('#domain').value,
        path: document.querySelector('#path').value,
        darkmode: document.querySelector('body.darkmode') ? 1 : 0,
    };
    window.localStorage.setItem('fixmystreet-cobrand-viewer-state', JSON.stringify(state));
}

var loadState = function(defaultState) {
    var state = window.localStorage.getItem('fixmystreet-cobrand-viewer-state');
    if ( state ) {
        var loadedState = JSON.parse(state);
        document.querySelector('#protocol').value = loadedState.protocol || defaultState.protocol;
        document.querySelector('#cobrand').value = loadedState.cobrand || defaultState.cobrand;
        document.querySelector('#domain').value = loadedState.domain || defaultState.domain;
        document.querySelector('#path').value = loadedState.path || defaultState.path;
        if ( loadedState.darkmode ) {
            document.querySelector('body').classList.add('darkmode');
        } else {
            document.querySelector('body').classList.remove('darkmode');
        }
    }
}

loadState(defaultState);
updatePreviews();

document.querySelector('#next').addEventListener('click', function(e){
    e.preventDefault();
    selectNextCobrand();
    updatePreviews();
});

document.querySelector('#previous').addEventListener('click', function(e){
    e.preventDefault();
    selectPreviousCobrand();
    updatePreviews();
});

document.querySelector('#reload').addEventListener('click', function(e){
    e.preventDefault();
    updatePreviews();
});

document.querySelector('#darkmode').addEventListener('click', function(e){
    e.preventDefault();
    if ( document.querySelector('body.darkmode') ) {
        document.querySelector('body').classList.remove('darkmode');
    } else {
        document.querySelector('body').classList.add('darkmode');
    }
    saveState();
});

document.querySelectorAll('#protocol, #cobrand, #domain, #path').forEach(function(el){
    el.addEventListener('change', function(){
        updatePreviews();
        saveState();
    });
});
