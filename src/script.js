import loadjs from "loadjs";

export default function Script() {

    return (
    loadjs.reset(),
    loadjs("https://code.jquery.com/jquery-3.4.1.min.js",{async:true}),
    loadjs("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",{async:true}),
    loadjs("./assest/lib/wow/wow.min.js",{async:true}),
    loadjs("./assest/lib/easing/easing.min.js",{async:true}),
    loadjs("./assest/lib/waypoints/waypoints.min.js",{async:true}),
    loadjs("./assest/lib/owlcarousel/owl.carousel.min.js",{async:true}),
    loadjs("./assest/js/main.js",{async:true})
    
    )
}