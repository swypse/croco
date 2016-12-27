export class Word {
	$id: string;
	content: string;
	desc: string;
	level: number;

	constructor(data: any) {
		this.$id = String(data.id);
		this.content = data.content;
		this.desc = data.desc;
		this.level = Number(data.level);
	}
}