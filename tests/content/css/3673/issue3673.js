function runTest()
{
    FBTest.sysout("issue3673.START");
    FBTest.openNewTab(basePath + "css/3673/issue3673.html", function(win)
    {
        FBTest.openFirebug();
        var panel = FBTest.selectPanel("stylesheet");
        var warning = panel.panelNode.querySelector(".warning");
        FBTest.ok(warning, "There must be a warning: There are no rules ...");

        FBTest.reload(function(win)
        {
            var panel = FBTest.selectPanel("stylesheet");
            var warning = panel.panelNode.querySelector(".warning");
            FBTest.ok(warning, "The text must be still there...");

            FBTest.testDone("issue3673.DONE");
        })
    });
}
