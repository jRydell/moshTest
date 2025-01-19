import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render the users name", () => {
    const user: User = { id: 1, name: "Johan" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument;
  });
});
