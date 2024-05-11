import RestaurantCard from "../RestaurantCard"
import { render ,screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render Restaurant Component with props data",()=>{
    render(<RestaurantCard {...MOCK_DATA}/>);
    const name=screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

