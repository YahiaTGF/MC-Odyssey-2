// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Gobber
    event.recipes.bloodmagic.altar('gobber2:gobber2_globette', 'thermal:netherite_gear').upgradeLevel(3).altarSyphon(5000).consumptionRate(20).drainRate(20)
    event.recipes.bloodmagic.altar('gobber2:gobber2_globette_nether', 'gobber2:gobber2_globette').upgradeLevel(3).altarSyphon(10000).consumptionRate(20).drainRate(20)
    event.recipes.bloodmagic.altar('gobber2:gobber2_globette_end', 'gobber2:gobber2_globette_end').upgradeLevel(4).altarSyphon(20000).consumptionRate(20).drainRate(20)

    // Netherite
    event.recipes.bloodmagic.altar('minecraft:netherite_ingot', 'botania:terrasteel_ingot').upgradeLevel(1).altarSyphon(500).consumptionRate(5).drainRate(5)
    event.recipes.bloodmagic.altar('kubejs:choombium_ingot', 'minecraft:netherite_ingot').upgradeLevel(2).altarSyphon(1500).consumptionRate(5).drainRate(5)
    
    // Draconium
    event.recipes.bloodmagic.altar('draconicevolution:draconium_dust', 'gobber2:gobber2_ingot_end').upgradeLevel(4).altarSyphon(7500).consumptionRate(20).drainRate(25)
    event.recipes.bloodmagic.altar('draconicevolution:draconium_ingot', 'gobber2:dragon_star').upgradeLevel(4).altarSyphon(10000).consumptionRate(20).drainRate(20)

})