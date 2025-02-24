(function (apiKey) {
    (function (p, e, n, d, o) {
      var v, w, x, y, z;
      o = p[d] = p[d] || {};
      o._q = o._q || [];
      v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
      for (w = 0, x = v.length; w < x; ++w)
        (function (m) {
          o[m] =
            o[m] ||
            function () {
              o._q[m === v[0] ? "unshift" : "push"](
                [m].concat([].slice.call(arguments, 0))
              );
            };
        })(v[w]);
      y = e.createElement(n);
      y.async = !0;
      y.src = "https://cdn.pendo.io/agent/static/" + apiKey + "/pendo.js";
      z = e.getElementsByTagName(n)[0];
      z.parentNode.insertBefore(y, z);
    })(window, document, "script", "pendo");
  
    // This function creates visitors and accounts in Pendo
    // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
    // Please use Strings, Numbers, or Bools for value types.
    pendo.initialize({
      visitor: {
        id: "likitharavikuma@tailadmin.com",
        email: "likitharavikumar@tailadmin.com",
        firstName: "likitha",
        lastName: "ravikumar",
        full_name: "Likitha ravikumar",
        birthDate: "2000-10-10",
        tags: ["Senior Engineer"],
        creationDate: "2024-08-23T15:08:11+05:30",
        applicableRuleIds: ["128HJ", "129AA", "130IK", "131LK", "240LL"],
        numericList: [400, 500, 600, 700, 800],
        uniqueClientId: 99294858,
        serverUrl: "https://likitharavikumar.netlify.app",
      },
  
      account: {
        id: "likitha",
        name: "Tail Admin",
        monthly_value: 20000,
        is_paying: true,
        tags: ["enterprise"],
        domain: "echelonsynergy.com",
      },
    });
  })("a80ccf64-02fa-4d26-7de6-8889adcea20f"); 
  