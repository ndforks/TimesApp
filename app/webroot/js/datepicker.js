$('#dpProjectDeadLine').prop('disabled', true);

$('#dpProjectStartingDate').Zebra_DatePicker({
  direction: true,
  pair: $('#dpProjectDeadLine'),
  show_icon: false,
  offset: [-300, -5],

  onSelect: function() {
  	$('#dpProjectDeadLine').prop('disabled', false);
  	$('#dpProjectDeadLine + button').removeClass("Zebra_DatePicker_Icon_Disabled");
  }
});

$('#dpProjectDeadLine').Zebra_DatePicker({
  direction: 1,
  show_icon: false,
  offset: [-300, -5]
});

$('#dpProjectStartingDateEdit').Zebra_DatePicker({
  direction: true,
  show_icon: false,
  offset: [-300, -5],
  pair: $('#dpProjectDeadLineEdit')
});

$('#dpProjectDeadLineEdit').Zebra_DatePicker({
  direction: 1,
  offset: [-300, -5],
  show_icon: false
});