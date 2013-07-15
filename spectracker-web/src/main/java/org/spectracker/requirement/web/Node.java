/**
 * SpecTracker project 2013  
 */

package org.spectracker.requirement.web;

import java.util.ArrayList;
import java.util.List;

/**
 * @author d1bernard
 *
 */
public class Node {
	private String id;
	private String libelle;
	private List<Node> nodes = new ArrayList<Node>();
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	/**
	 * @return the libelle
	 */
	public String getLibelle() {
		return libelle;
	}
	/**
	 * @param libelle the libelle to set
	 */
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	/**
	 * @return the nodes
	 */
	public List<Node> getNodes() {
		return nodes;
	}
	/**
	 * @param nodes the nodes to set
	 */
	public void setNodes(List<Node> nodes) {
		this.nodes = nodes;
	}
	
	
	
}
