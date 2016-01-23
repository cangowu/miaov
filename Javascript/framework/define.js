/**
 * Created by Administrator on 2016/1/12.
 */
(function() {
    var moduleMap = {};
    window.thin = {
        define: function(name, dependencies, factory) {
            if (!moduleMap[name]) {
                var module = {
                    name: name,
                    dependencies: dependencies,
                    factory: factory
                };
                moduleMap[name] = module;
            }
            return moduleMap[name];
        }
    };
})();