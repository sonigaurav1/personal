function addPawn() {
    const code = document.getElementById("code").value;
    const weight = document.getElementById("weight").value;
    const date = document.getElementById("date").value;
    const owner = document.getElementById("owner").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;
  
    const row = `<tr>
                    <td>${code}</td>
                    <td>${weight}</td>
                    <td>${date}</td>
                    <td>${owner}</td>
                    <td>${phone}</td>
                    <td>${description}</td>
                </tr>`;
    
    document.getElementById("pawnTable").insertAdjacentHTML("beforeend", row);
    document.getElementById("pawnForm").reset();
  }