var tier1 = ["wood","stone","food","crystal"];

for(var i = 0; i < tier1.length; i++) {
	window[tier1[i]] = 0;
	window[tier1[i]+'StorageLimit'] = 10;
}