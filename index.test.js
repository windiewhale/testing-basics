const search = require("./index")

const mockDb = ["darkgreen2", "darkblue2", "yellow2", "orange2", "green2", "purple2", "darkpurple2" ]

it("this is my first test", () => {
    expect("hello").toEqual("hello")
    search(mockDb, "dark")
})

it("real search with empty result", () => {
    expect(search(mockDb, "zzz")).toEqual([])  
})

it("real search with dark keyword, expected non empty array as result", () => {
    expect(search(mockDb, "dark")).toEqual(["darkgreen2", "darkblue2", "darkpurple2"])  
})