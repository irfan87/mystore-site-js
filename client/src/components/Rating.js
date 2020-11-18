const Rating = {
	render: ({ value, text }) => {
		if (!value) {
			return '<div></div>';
		}

		return `
      <div class="rating">
        <span>
          <i class="${
						value >= 1
							? 'fa fa-star'
							: value >= 0.5
							? 'fa fa-star-half-o'
							: 'fa fa-star-o'
					}"></i>
        </span>
        <span>
          <i class="${
						value >= 2
							? 'fa fa-star'
							: value >= 1.5
							? 'fa fa-star-half-o'
							: 'fa fa-star-o'
					}"></i>
        </span>
        <span>
          <i class="${
						value >= 3
							? 'fa fa-star'
							: value >= 2.5
							? 'fa fa-star-half-o'
							: 'fa fa-star-o'
					}"></i>
        </span>
        <span>
          <i class="${
						value >= 4
							? 'fa fa-star'
							: value >= 3.5
							? 'fa fa-star-half-o'
							: 'fa fa-star-o'
					}"></i>
        </span>
        <span>
          <i class="${
						value >= 5
							? 'fa fa-star'
							: value >= 4.5
							? 'fa fa-star-half-o'
							: 'fa fa-star-o'
					}"></i>
        </span>
        <span>${text || ''}</span>
      </div>
    `;
	},
};

export default Rating;
