import * as crypto from "./crypto";

describe("hash", () => {
  it("should produce hash", () => {
    //given
    const input = `azeazeaze
    ezaez
    1111`;
    //when
    const output = crypto.hash(input);
    //then
    expect(output).toBe(-1343385945);
  });
});
