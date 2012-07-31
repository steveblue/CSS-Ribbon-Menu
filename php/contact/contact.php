</div>

<section id="contact">


<div class="form">
<h1>Contact</h1>
	<form method="post" name="contactform" id="contactform" action="php/contact/formmail/formmail.php">
		<dl>
			<input type="hidden" name="recipient" value="EMAIL_HERE">
			<input type="hidden" name="sort" value="message,website,name">
			<input type="hidden" name="subject" value="Newest Submission">
			<input type="hidden" name="line_spacing" value="2"> 
			<dt>
				<label for="Name">Name</label>
			</dt>
			<dd><input type="text" id="name" class="single required" name="name" /><em>*</em></dd>
		</dl>
		<dl>
			<dt>
				<label for="email">Email</label>
			</dt>
			<dd><input type="text" id="email" class="single required email" name="email" /><em>*</em></dd>
		</dl>
	
		<dl>
			<dt>
				<label for="website">Website</label>
			</dt>
			<dd><input type="text" id="website" class="single url" name="website" /></dd>
		</dl>
		<dl>
			<dt>
				<label for="message">Message</label>
			</dt>
			<dd>
				<textarea id="message" class="required" name="message" rows="5" cols="50" minwords="12" maxwords="400">Type Message Here</textarea><em>*</em>
			</dd>
		</dl>
		<dl>
			<dt>
				<label for="message">3 + 4 = ?</label>
			</dt>
			<dd>
				<input id="human" type="text" class="required" name="math" ></input><em>*</em>
			</dd>
		</dl>
		<dl>
		
			<input type="hidden" name="redirect" value="http://example.com">
		</dl>
		
		<div id="submit_buttons">
			<button type="reset">Reset</button>
			<button type="submit">Submit</button>
		</div>
		</form>
</div>

</section>




