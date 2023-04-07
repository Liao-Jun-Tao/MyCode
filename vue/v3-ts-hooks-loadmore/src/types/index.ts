// <类型传参> CloumnProps?

interface ListProps<p> {
	// key [id] 字符串
	[id: string]: p;
}

interface ColumnProps {
	_id: string;
	title: string;
	description: string;
}

export interface GlobalDataProps {
	columns: {
		data: ListProps<ColumnProps>;
		currentPage: number;
		total: number;
	};
}
