describe("Admin", () => {
  it("An admin can erase tables", () => {
    // delete all table entries
    cy.request("DELETE", "http://localhost:3030/admin/reset", {
      user: "admin",
      password: "password",
    });

    // checking db is empty
    cy.visit("/admin");
    cy.get("#posts-count").contains("#Posts = 0");
    cy.get("#users-count").contains("#Users = 0");

    // sign up
    cy.visit("/users/new");
    cy.get("#first-name").type("some");
    cy.get("#last-name").type("one");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#signup").click();

    // sign in
    cy.visit("/");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#login").click();

    // creates a post
    cy.visit("/posts");
    cy.contains("New post").click();

    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    cy.visit("/posts");
    cy.get(".posts").should("contain", "Hello, world!");

    // checking admin page reflects update in database
    cy.visit("/admin");
    cy.get("#posts-count").contains("#Posts = 1");
    cy.get("#users-count").contains("#Users = 1");
  });
});
