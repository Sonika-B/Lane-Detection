import Body from "../Body"
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should search res list for burger input",async()=>{
    await act(async ()=>
        render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    );
    const cardsBeforeSearch=screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    const searchBtn=screen.getByRole("button",{name:"Search"});
    const searchInput=screen.queryByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:'burger'}});
    fireEvent.click(searchBtn);
    const cardsAfterSearch=screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});