function count_visits() {
    if (localStorage.visit_count) {
        localStorage.visit_count = Number(localStorage.visit_count) + 1;
    }
    else {
        localStorage.visit_count = 1;
    }
    document.all.local.innerHTML = Number(localStorage.visit_count)
        
    
}

function count_visits_session() {
    if (sessionStorage.visit_counts) {
        sessionStorage.visit_counts = Number(sessionStorage.visit_counts) + 1;
    }
    else {
        sessionStorage.visit_counts = 1;
    }
    document.all.session.innerHTML = Number(sessionStorage.visit_counts)
}
