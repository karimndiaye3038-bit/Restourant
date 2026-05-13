

// PANIER
let panier = [];

// OUVRIR / FERMER
function toggleCart() {

    document
        .getElementById("cart-panel")
        .classList.toggle("hidden");

    document
        .getElementById("cart-overlay")
        .classList.toggle("hidden");

}
// AJOUTER
function ajouterAuPanier(nom, prix) {

    const produit = panier.find(
        item => item.nom === nom
    );
    if (produit) {

        produit.quantite++;

    } else {

        panier.push({
            nom,
            prix,
            quantite: 1
        });

    }

    afficherPanier();

}

// SUPPRIMER
function supprimerDuPanier(nom) {

    panier = panier.filter(
        item => item.nom !== nom
    );

    afficherPanier();

}

// AFFICHER PANIER
function afficherPanier() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;

    panier.forEach(item => {

        total += item.prix * item.quantite;

        count += item.quantite;

        cartItems.innerHTML += `

                    <div class="flex justify-between items-center border-b pb-3">

                        <div>

                            <h3 class="font-bold">
                                ${item.nom}
                            </h3>

                            <p class="text-orange-500 text-sm">
                                ${item.prix} FCFA × ${item.quantite}
                            </p>

                        </div>

                        <button
                            onclick="supprimerDuPanier('${item.nom}')"
                            class="text-red-500 font-bold">

                            X

                        </button>

                    </div>

                `;

    });

    cartTotal.textContent =
        total + " FCFA";

    cartCount.textContent =
        count;

    if (count > 0) {

        cartCount.classList.remove("hidden");

    } else {

        cartCount.classList.add("hidden");

    }

}

// COMMANDER
function commander() {

    if (panier.length === 0) {

        alert("Le panier est vide !");

        return;

    }

    const numero = "221778653038";

    let message =
        "🍔 Bonjour Dakar Food,%0A%0A";

    message +=
        "Je souhaite commander :%0A%0A";

    let total = 0;

    panier.forEach(item => {

        message +=
            `- ${item.nom} x${item.quantite} = ${item.prix * item.quantite} FCFA%0A`;

        total +=
            item.prix * item.quantite;

    });

    message +=
        `%0A💰 Total : ${total} FCFA`;

    window.open(
        `https://wa.me/${numero}?text=${message}`,
        "_blank"
    );

}
// FILTRE
function filtrerMenu(categorie) {

    const cartes =
        document.querySelectorAll(".card");

    cartes.forEach(carte => {

        if (
            categorie === "all" ||
            carte.dataset.category === categorie
        ) {

            carte.style.display = "block";

        } else {

            carte.style.display = "none";

        }

    });

}

// BOUTONS AUTOMATIQUES
document
    .querySelectorAll(".add-to-cart")
    .forEach(button => {

        button.addEventListener("click", () => {

            const nom =
                button.dataset.name;

            const prix =
                parseInt(button.dataset.price);

            ajouterAuPanier(nom, prix);

        });

    });

    function envoyerMessageWhatsApp() {

    // NUMÉRO WHATSAPP
    const numero = "221778653038";

    // RÉCUPÉRER LES VALEURS
    const nom = document.getElementById("contact-nom").value;
    const telephone = document.getElementById("contact-tel").value;
    const messageClient = document.getElementById("contact-message").value;

    // VÉRIFICATION
    if (nom === "" || telephone === "" || messageClient === "") {

        alert("Veuillez remplir tous les champs !");
        return;

    }

    // MESSAGE
    let message = `Bonjour Dakar Food 👋%0A%0A`;

    message += `👤 Nom : ${nom}%0A`;
    message += `📞 Téléphone : ${telephone}%0A`;
    message += `💬 Message : ${messageClient}%0A`;

    // URL WHATSAPP
    const url = `https://wa.me/${numero}?text=${message}`;

    // OUVRIR WHATSAPP
    window.open(url, "_blank");

    // VIDER LES CHAMPS
    document.getElementById("contact-nom").value = "";
    document.getElementById("contact-tel").value = "";
    document.getElementById("contact-message").value = "";

}

    
//fin de l'animation du navbar

