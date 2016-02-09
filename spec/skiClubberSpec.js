describe("SkiClubber", function () {

    var hammer = new SkiClubber("Hammer");
    var cassie = new SkiClubber("Cassie");

    it("pours a perfect BeerBong if its name is Hammer, and a foamy beer bong otherwise", function () {
        expect(!hammer.pour(1).isFoamy);
        expect(cassie.pour(1).isFoamy);
    });
    it("cannot physically pour more than 3 beers into a single BeerBong", function () {
        expect(
            function() {
                hammer.pour(4);
            }
        ).toThrow(new Error("Shorty BeerBongs cannot hold more than 3 beers."));
    });
    it("cannot drink a BeerBong with 2 or more beers unless its name is Hammer", function () {
        var doubleBeerBong = hammer.pour(2);
        var tripleBeerBong = hammer.pour(3);
        expect(hammer.drink(doubleBeerBong));
        expect(hammer.drink(tripleBeerBong)); // And right after each other, too
        expect(!cassie.drink(doubleBeerBong));
        expect(!cassie.drink(tripleBeerBong));
    });
    it("should empty (but not de-foam) the BeerBong after drinking", function () {
        var beerBong = cassie.pour(1);
        hammer.drink(beerBong);
        expect(beerBong.numBeers === 0);
        expect(beerBong.isFoamy);
    });
    it("should not be able to blow a BeerBong horn while there's beer left", function () {
        var beerBong = hammer.pour(1);
        expect(hammer.blowHorn(beerBong) === null);
    });
    it("should de-foam an empty BeerBong and summon El Presidente when the horn is blown", function () {
        var beerBong = cassie.pour(1); // Will be foamy since Cassie poured it
        hammer.drink(beerBong);
        expect(beerBong.isFoamy);
        var summonedMember = hammer.blowHorn(beerBong);
        expect(summonedMember.firstName === "Jess");
        expect(!beerBong.isFoamy);
    });
    it("should be able to chant a Rat Shit Bat Shit", function () {
        var dontCheatAndCopyMe = "Rat Shit 71 Rat 73 74 BatShit 76 77 Rat 79 Shit Rat 82 83 Rat Shit 86 Rat 88 89 BatShit 91 92 Rat 94 Shit Rat 97 98 Rat Shit 101 Rat 103 104 BatShit 106 107 Rat 109 Shit Rat 112 113 Rat Shit 116 Rat 118 119 BatShit 121 122 Rat 124 Shit Rat 127 128 Rat Shit 131 Rat 133 134 BatShit 136 137 Rat 139 Shit Rat 142 143 Rat Shit 146 Rat 148 149 BatShit 151 152 Rat 154 Shit Rat 157 158 Rat Shit 161 Rat 163 164 BatShit 166 167 Rat 169 Shit Rat 172 173 Rat Shit 176 Rat 178 179 BatShit 181 182 Rat 184 Shit Rat 187 188 Rat Shit 191 Rat 193 194 BatShit 196 197 Rat 199 Shit Rat 202 203 Rat Shit 206 Rat 208 209 BatShit 211 212 Rat 214 Shit Rat 217 218 Rat Shit 221 Rat 223 224 BatShit 226 227 Rat 229 Shit Rat 232 233 Rat Shit 236 Rat 238 239 BatShit 241 242 Rat 244 Shit Rat 247 248 Rat Shit 251 Rat 253 254 BatShit 256 257 Rat 259 Shit Rat 262 263 Rat Shit 266 Rat 268 269 BatShit 271 272 Rat 274 Shit Rat 277 278 Rat Shit 281 Rat 283 284 BatShit 286 287 Rat 289 Shit Rat 292 293 Rat Shit 296 Rat 298 299 BatShit 301 302 Rat 304 Shit Rat 307 308 Rat Shit 311 Rat 313 314 BatShit 316 317 Rat 319 Shit Rat 322 323 Rat Shit 326 Rat 328 329 BatShit 331 332 Rat 334 Shit Rat 337 338 Rat Shit 341 Rat 343 344 BatShit 346 347 Rat 349 Shit Rat 352 353 Rat Shit 356 Rat 358 359 BatShit 361 362 Rat 364 Shit Rat 367 368 Rat Shit 371 Rat 373 374 BatShit 376 377 Rat 379 Shit Rat 382 383 Rat Shit 386 Rat 388 389 BatShit 391 392 Rat 394 Shit Rat 397 398 Rat Shit 401 Rat 403 404 BatShit 406 407 Rat 409 Shit Rat 412 413 Rat Shit 416 Rat 418 419 BatShit";
        expect(hammer.ratShitBatShit() === dontCheatAndCopyMe);
    });
});
