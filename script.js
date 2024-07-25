document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".sidebar nav a");
  const mainContents = document.querySelectorAll(".main-content");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");

      // Hide all main content sections
      mainContents.forEach((content) => {
        content.style.display = "none";
      });

      // Show the target section
      document.getElementById(targetId).style.display = "block";
    });
  });

  // Set initial view to Dashboard
  document.getElementById("Dashboard").style.display = "block";

  // Handle form submission
  const nilaiForm = document.getElementById("nilaiForm");
  const nilaiTableBody = document.getElementById("nilaiTableBody");

  nilaiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const uas = document.getElementById("uas").value;
    const uts = document.getElementById("uts").value;
    const tugas1 = document.getElementById("tugas1").value;
    const tugas2 = document.getElementById("tugas2").value;
    const tugas3 = document.getElementById("tugas3").value;
    const keterangan = document.getElementById("keterangan").value;

    if (nama && tugas1 && tugas2 && tugas3 && uas && uts) {
      const newRow = document.createElement("tr");

      const cellNo = document.createElement("td");
      cellNo.textContent = nilaiTableBody.rows.length + 1;
      newRow.appendChild(cellNo);

      const cellNama = document.createElement("td");
      cellNama.textContent = nama;
      newRow.appendChild(cellNama);

      const cellUas = document.createElement("td");
      cellUas.textContent = uas;
      appendChild(cellUas);

      const cellUts = document.createElement("td");
      cellUts.textContent = uts;
      newRow.appendChild(cellUts);

      const cellTugas1 = document.createElement("td");
      cellTugas1.textContent = tugas1;
      newRow.appendChild(cellTugas1);

      const cellTugas2 = document.createElement("td");
      cellTugas2.textContent = tugas2;
      newRow.appendChild(cellTugas2);

      const cellTugas3 = document.createElement("td");
      cellTugas3.textContent = tugas3;
      newRow.appendChild(cellTugas3);

      const cellKeterangan = document.createElement("td");
      cellKeterangan.textContent = keterangan;
      newRow.appendChild(cellKeterangan);

      nilaiTableBody.appendChild(newRow);

      // Clear form fields after submission
      nilaiForm.reset();
    }
  });
});
