const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const themeToggler = document.querySelector(".theme-toggler");

/* OPEN SIDEBAR */

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

/* DARK MODE */

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

/* FILL ORDERS TABLE */

orders.forEach((order) => {
  const tr = document.createElement("tr");

  const trContent = `
      <td>${order.productName}</td>
      <td>${order.productNumber}</td>
      <td>${order.paymentStatus}</td>
      <td class="${
        order.shipping === "Declined"
          ? "danger"
          : order.shipping === "Pending"
            ? "warning"
            : "success"
      }">${order.shipping}</td>
      <td class="primary">Details</td>
  `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
