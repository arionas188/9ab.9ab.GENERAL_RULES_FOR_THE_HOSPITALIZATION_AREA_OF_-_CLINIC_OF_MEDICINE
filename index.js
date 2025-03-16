(function () {
    // Όταν φορτώνει η σελίδα, ελέγχει το localStorage για τη γλώσσα
    document.addEventListener("DOMContentLoaded", function () {
        let savedLang = localStorage.getItem("language") || "gr"; // Default Ελληνικά
        changeLanguage(savedLang);
        setupBackToTopButton();
    });

    // Event listeners για τα κουμπιά αλλαγής γλώσσας
    document.getElementById("greek-btn").addEventListener("click", function () {
        changeLanguage("gr");
    });

    document.getElementById("english-btn").addEventListener("click", function () {
        changeLanguage("en");
    });

    function changeLanguage(lang) {
        let content = {
            "gr": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 ΤΟΜΕΑΣ ΚΛΙΝΙΚΩΝ ΚΤΗΝΙΑΤΡΙΚΩΝ ΣΠΟΥΔΩΝ ΠΑΘΟΛΟΓΙΚΗ ΚΛΙΝΙΚΗ - ΖΩΑ ΣΥΝΤΡΟΦΙΑΣ",
                "rules_title1": "📌 ΓΕΝΙΚΟΙ ΚΑΝΟΝΕΣ ΓΙΑ ΤΟ ΧΩΡΟ ΤΟΥ ΝΟΣΗΛΕΥΤΗΡΙΟΥ",
                "rules": [

                    "🟠 . Απαγορεύεται η είσοδος χωρίς ιατρική ποδιά.",
                    "🟠 . Απαγορεύεται η κατανάλωση τροφών και ποτών.",
                    "🟠 . Απαγορεύεται η χρήση ηλεκτρονικών υπολογιστών και tablet.",
                    "🟠 . Δεν επιτρέπεται η είσοδος φοιτητών που δεν έχουν νοσηλεία τη δεδομένη στιγμή.",
                    "🟠 . Δεν επιτρέπεται η είσοδος ιδιοκτητών, εκτός από τις ώρες επισκεπτηρίου.",
                    "🟠 . Πριν και μετά την εξέταση κάθε ζώου κάθε κτηνίατρος και φοιτητής πρέπει να πλένει σχολαστικά τα χέρια.",
                    "🟠 . Σε περιστατικό ύποπτο για λοιμώδες νόσημα πρέπει να χρησιμοποιούνται γάντια μίας χρήσης, τα οποία απορρίπτονται στον κάδο απορριμμάτων μετά την εξέταση.",
                    "🟠 . Με το πέρας της εξέτασης τα αναλώσιμα μίας χρήσης απορρίπτονται στον κάδο απορριμμάτων, τα αιχμηρά αντικείμενα απορρίπτονται στον ειδικό κάδο ασφαλείας και τα αντικείμενα που επαναχρησιμοποιούνται (π.χ. φίμωτρα, ψαλίδια, λαβίδες) πλένονται στον νιπτήρα με αντισηπτικό διάλυμα και αφού στεγνώσουν επιστρέφονται στη θέση τους.",
                    "🟠 . Mε το πέρας της εξέτασης, το εξεταστικό τραπέζι και ο πάγκος εργασίας καθαρίζονται με απολυμαντικό διάλυμα.",
                    "🟠 . Μετά την έξοδο κάθε νοσηλευόμενου ζώου, το κλουβί νοσηλείας του πρέπει να καθαρίζεται σχολαστικά με απολυμαντικό διάλυμα. Τα υποστρώματα που χρησιμοποιήθηκαν απορρίπτονται στον κάδο απορριμμάτων αν είναι μιας χρήσεως, ενώ, αν επαναχρησιμοποιούνται, πλένονται στο πλυντήριο σε υψηλή θερμοκρασία.",
                    "🟠 . Τα υλικά και ο εξοπλισμός καθαριότητας του Νοσηλευτηρίου και ο κάδος βρίσκονται υποχρεωτικά έξω από το χώρο του Νοσηλευτηρίου κατά τη διάρκεια της νοσηλείας ",
                    "🟠 . Ισχύουν οι περιορισμοί που αναγράφονται για τους χώρους των εξεταστηρίων και της Κλινικής.",
                    "🟠 . Πρώτες βοήθειες: Σε περιπτώσεις μικροτραυματισμών υπάρχει φαρμακείο στην Κλινική.", 
                    "🟠 . Ιατρική βοήθεια παρέχεται από Γενικό Νοσοκομείο Καρδίτσας (Τμήμα Επειγόντων περιστατικών). Τηλέφωνο επικοινωνίας  2441351520 / ΕΚΑΒ Τηλέφωνο επικοινωνίας ",
                    "🟠 . Σε περίπτωση πυρκαγιάς υπάρχει σύστημα πυρόσβεσης με νερό καθώς και πυροσβεστήρες ξηράς κόνεως στο διάδρομο κάθε ορόφου / ΠΥΡΟΣΒΕΣΤΙΚΗ Τηλέφωνο επικοινωνίας 199."

                ],
                "cautionTitle": "Προσοχή!",
                "cautionParagraph": "Διατηρείτε το χώρο της Κλινικής και τον εξοπλισμό πάντα καθαρά."

            },
            "en": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 DEPARTMENT OF CLINICAL VETERINARY STUDIES CLINIC OF SURGERY",
                "rules_title1": "📌 GENERAL RULES FOR THE HOSPITALIZATION AREA",
                "rules": [
                    "🟠 • Entry without a medical coat is prohibited.",
                    "🟠 • The consumption of food and drinks is prohibited.",
                    "🟠 • Students who are not currently involved in a hospitalized case are not allowed to enter.",
                    "🟠 • Owners are not allowed to enter without being accompanied by the responsible veterinarian and outside visiting hours.",
                    "🟠 • Before and after clinical examination of each animal, every veterinarian and student must thoroughly wash their hands.",
                    "🟠 • In a case suspected of an infectious disease, disposable gloves must be used and discarded in the waste bin after the examination.",
                    "🟠 • After clinical examination, disposable items are discarded in the waste bin, sharp objects are disposed of in the special yellow container, and reusable items (e.g., muzzles, scissors) are washed with disinfectant solution. Once dried, they are returned to their proper places.",
                    "🟠 • After clinical examination, the table and workbench are cleaned with a disinfectant solution.",
                    "🟠 • Following discharge of each hospitalized animal, its cage must be thoroughly cleaned with a disinfectant solution. The bedding used should be discarded in the waste bin if it is disposable; if it is reusable, it should be washed in the washing machine at high temperature.",
                    "🟠 • Cleaning materials and equipment, as well as waste bins for the hospitalization area must be stored outside the inpatient area during the hospitalization period.",
                    "🟠 • It is prohibited to place the animals' leashes, collars, and harnesses on the examination tables.",
                    "🟠 • The restrictions stated for the examination rooms and clinic areas apply here as well.",
                    "🟠 • First aid: In cases of minor injuries there is a pharmacy in the Clinic.", 
                    "🟠 • Medical assistance is provided at General Hospital of Karditsa (Emergency Care Unit). Telephone: 2441351520 / ΕΚΑΒ (National Service of Emergency Care) Telephone: 166.",
                    "🟠 • In case of fire. A Dry powder extinguisher exists on the room / Fire Service Telephone: 199."
                ],
                "cautionTitle": "Attention!",
                "cautionParagraph": "Keep the Clinic/Laboaratory areas and equipment always clean."
            }
        };

       // Αποθηκεύουμε τη γλώσσα στο localStorage
       localStorage.setItem("language", lang);

        // Επιλογή στοιχείων που θα αλλάξουν
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

    // Προσθήκη fade-out effect πριν την αλλαγή
    document.body.classList.add("fade-out");

    setTimeout(() => {

        // Επιλογή στοιχείων
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

        // Ενημέρωση περιεχομένου
        document.title = content[lang].title;
        title.textContent = content[lang].title;
        section.textContent = content[lang].section;
        rulesTitle1.textContent = content[lang].rules_title1;
        cautionTitle.textContent = content[lang].cautionTitle;
        cautionParagraph.textContent = content[lang].cautionParagraph;

        // Ενημέρωση λίστας κανόνων
        content[lang].rules.forEach((text, index) => {
            if (rulesList1[index]) {
                rulesList1[index].innerHTML = text;
            }
        });

        // Προσθήκη fade-in effect μετά την αλλαγή
        document.body.classList.remove("fade-out");
    }, 500); // Μικρή καθυστέρηση για ομαλή εναλλαγή
    }
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Εμφανίζεται μετά από 50px scroll
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Λειτουργία επιστροφής στην κορυφή
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();