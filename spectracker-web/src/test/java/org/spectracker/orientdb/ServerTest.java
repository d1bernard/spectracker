package org.spectracker.orientdb;

import org.junit.Test;

import com.orientechnologies.orient.core.db.document.ODatabaseDocumentTx;
import com.orientechnologies.orient.core.record.impl.ODocument;
import com.orientechnologies.orient.core.tx.OTransaction.TXTYPE;
import com.orientechnologies.orient.server.OServer;
import com.orientechnologies.orient.server.OServerMain;

/**
 * Test class for Orient db embedded server functionnality. 
 * @author d1bernard
 *
 */
public class ServerTest {
	
	@Test
	public void testStartServer() {
		OServer server=null;
		ODatabaseDocumentTx documentDb=null;
		try {
			server = OServerMain.create();
			server.startup(getClass().getClassLoader().getResourceAsStream("db.config.xml"));
			server.activate();
			documentDb=new ODatabaseDocumentTx("local:D:/temp/spectracker");
			if (documentDb.exists()) {
				documentDb.open("admin","admin");
			} else {
				documentDb.create();
			}
			documentDb.begin(TXTYPE.OPTIMISTIC);
//			documentDb.begin();
			ODocument animal = new ODocument("Animal");
			  animal.field( "name", "Gaudi" );
			  animal.field( "location", "Madrid" );
			  animal.save();
			  
			  documentDb.commit();
		} catch (Exception e) {
			documentDb.rollback();
		
		} finally {
			if (documentDb!=null) {
				documentDb.close();
			}
			if (server!=null) {
				server.shutdown();
			}
		}
	}
	
}
