package gesture.lib;

public class GestureOdai {

	private int groupNo;
	private int odaiNo;
	private String odai;

	/**
	 * コンストラクタ
	 *
	 * @param groupNo お題のグループNO
	 * @param odaiNo  お題の順番
	 * @param odai    お題
	 */
	public GestureOdai(int groupNo, int odaiNo, String odai) {
		this.groupNo = groupNo;
		this.odaiNo = odaiNo;
		this.odai = odai;
	}

	public int getGroupNo() {
		return groupNo;
	}

	public void setGroupNo(int groupNo) {
		this.groupNo = groupNo;
	}

	public int getOdaiNo() {
		return odaiNo;
	}

	public void setOdaiNo(int title) {
		this.odaiNo = title;
	}

	public String getOdai() {
		return odai;
	}

	public void setBody(String odai) {
		this.odai = odai;
	}
}
