describe("the greet function", function(){

    it("should great Lindani with 'Hello, Lindani'", function(){
        assert.equal("Hello, Lindani", greet("Lindani"));
    });

    it("should great Zola with 'Hello, Zola'",function(){
        assert.equal("Hello, Zola", greet("Zola"));
    });

});