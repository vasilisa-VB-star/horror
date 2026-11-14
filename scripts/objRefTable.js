const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{Спрайт: 0},
	{Твёрдый: 0},
	{Спрайт2: 0},
	{Платформер: 0},
	{Спрайт3: 0},
	{Спрайт4: 0},
	{Спрайт5: 0},
	{Спрайт6: 0},
	{Спрайт7: 0},
	{Аудио: 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Аудио: class extends self.IInstance {}
}