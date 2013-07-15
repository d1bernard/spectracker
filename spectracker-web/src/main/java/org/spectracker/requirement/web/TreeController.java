/**
 * SpecTracker project 2013  
 */
package org.spectracker.requirement.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Requirement module tree controller
 *
 */
@Controller
@RequestMapping("/requirement/tree/")
public class TreeController {
//	@RequestMapping("helloworld")
//    public String helloWorld(Model model) {
//        model.addAttribute("message", "Hello World!");
//        return "helloWorld";
//    }
	

	
	@RequestMapping(value="/node/{nodeId}", method=RequestMethod.GET)
    public @ResponseBody Node getTree(@PathVariable String nodeId,Model model) {
        Node node = new Node();
        node.setId(nodeId);
        node.setLibelle("libelle"+nodeId);
        return node;
    }

}
