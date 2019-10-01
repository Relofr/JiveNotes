export const store = {
  state: {
    notes: {
      agentName: JSON.parse(localStorage.getItem("agentName")),
      contact: JSON.parse(localStorage.getItem("contact")),
    }
  }
};
