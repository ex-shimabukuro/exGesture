package gesture.lib;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * gesture_odaiテーブルを管理するクラス
 * @author mune
 */
public class GestureOdaiDAO {

	/**
	 * Connection
	 */
	protected Connection con;

	/**
	 * コンストラクタ
	 * @param con Connection
	 */
	public GestureOdaiDAO(Connection con) {
		this.con = con;
	}

	/**
	 * gesture_odaiレコードを全件取得します。
	 * @return gesture_odaiレコード全件
	 * @throws SQLException SQL例外
	 */
	public List<GestureOdai> findAll() throws SQLException {
		try (PreparedStatement ps = con.prepareStatement("SELECT groupNo, odaiNo, odai FROM gesture_odai ORDER BY groupNo ,odaiNo")) {
			ResultSet rs = ps.executeQuery();
			List<GestureOdai> odaiList = new ArrayList<>();
			while (rs.next()) {
				GestureOdai gsOdai = new GestureOdai(rs.getInt("groupNo"), rs.getInt("odaiNo"), rs.getString("odai"));
				odaiList.add(gsOdai);
			}
			return odaiList;
		}
	}

	/**
	 * GroupNoでgesture_odaiレコードを検索します。
	 * @param groupNo グループNo
	 * @return gesture_odaiレコード
	 * @throws DataNotFoundException レコードが存在しない場合
	 * @throws SQLException
	 */
	public GestureOdai findByPrimaryKey(int groupNo) throws SQLException {
		try (PreparedStatement ps = con.prepareStatement("SELECT groupNo, odaiNo, odai FROM gesture_odai WHERE groupNo = ?")) {
			ps.setInt(1, groupNo);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				GestureOdai gsOdai = new GestureOdai(rs.getInt("groupNo"), rs.getInt("odaiNo"), rs.getString("odai"));
				return gsOdai;
			}
			throw new DataNotFoundException();
		}
	}

	/**
	 * お題を新規登録
	 * @param odai お題情報
	 * @return 更新件数
	 * @throws SQLException SQL例外
	 */
	public int create(GestureOdai Article) throws SQLException {
		try (PreparedStatement ps = con.prepareStatement("INSERT INTO gesture_odai(groupNo, odaiNo, odai) VALUES (?, ?, ?)")) {
			ps.setInt(1, Article.getGroupNo());
			ps.setInt(2, Article.getOdaiNo());
			ps.setString(3, Article.getOdai());
			return ps.executeUpdate();
		}
	}

	/**
	 * 既存のお題情報を更新
	 * @param Article 更新後の記事
	 * @param id 更新対象の記事ID
	 * @return 更新件数
	 * @throws SQLException SQL例外
	 */
	public int update(GestureOdai Article, int groupNo) throws SQLException {
		try (PreparedStatement ps = con
				.prepareStatement("UPDATE ARTICLE SET groupNo = ?, odaiNo = ?, odai = ? WHERE groupNo = ?")) {
			ps.setInt(1, Article.getGroupNo());
			ps.setInt(2, Article.getOdaiNo());
			ps.setString(3, Article.getOdai());
			ps.setInt(4, groupNo);
			return ps.executeUpdate();
		}
	}

	/**
	 * 既存のお題情報を削除します。
	 * @param groupNo 削除対象のグループNo
	 * @return 更新件数
	 * @throws SQLException SQL例外
	 */
	public int delete(int groupNo) throws SQLException {
		try (PreparedStatement ps = con
				.prepareStatement("DELETE FROM gesture_odai  WHERE groupNo = ?")) {
			ps.setInt(1, groupNo);
			return ps.executeUpdate();
		}
	}
}
